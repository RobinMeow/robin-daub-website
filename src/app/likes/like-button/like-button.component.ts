import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import {
  IpAddressIpify,
  IpAddressService,
  LikeErrorComponent,
  LikeRepository,
  LikeThanksComponent,
} from '@likes';
import { singleHeartBeatAnimation } from './singleHeartBeatAnimation';

@Component({
  selector: 'likes-like-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatBadgeModule],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [singleHeartBeatAnimation],
})
export class LikeButtonComponent implements OnInit {
  private readonly _ipAddressService = inject(IpAddressService);
  private readonly _likeRepository = inject(LikeRepository);
  private readonly _snackBar = inject(MatSnackBar);

  protected likes: WritableSignal<number> = signal(-1);

  ngOnInit(): void {
    this.loadLikes_FireAndForget();
  }

  protected heartState: string = '';

  private changeHeartState(newState: string) {
    this.heartState = newState;
  }

  protected badgeState: string = '';

  private changeBadgeState(newState: string) {
    this.badgeState = newState;
  }

  private async loadLikes_FireAndForget(): Promise<void> {
    try {
      const likeCount = await this._likeRepository.getCountAsync();
      this.likes.set(likeCount);
    } catch (error) {
      console.warn('Could not retrieve like count from server.', error);
    }
  }

  protected async onClickAsync(): Promise<void> {
    try {
      const promiseIpify: Promise<IpAddressIpify> =
        this._ipAddressService.getIPAddress$(); // uneccessary micro optimization
      this.changeHeartState('beatIt');
      const ipify: IpAddressIpify = await promiseIpify;
      const hasLikedAlready: boolean =
        await this._likeRepository.hasLikedAlreadyAsync(ipify.ip);

      if (hasLikedAlready) {
        this.showThanksForTheLike();
        return;
      }

      await this._likeRepository.addLikeAsync(ipify.ip);
      this.loadLikes_FireAndForget();
      this.changeBadgeState('beatIt');
      this.showThanksForTheLike();
    } catch (error) {
      this._snackBar.openFromComponent(LikeErrorComponent);
    }
  }

  private showThanksForTheLike(): void {
    this._snackBar.openFromComponent(LikeThanksComponent, {
      duration: 3500,
    });
  }
}

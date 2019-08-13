import { Component, OnInit, Inject } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { Track } from '../modals/Track';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  constructor(private muzixService: MuzixService, private dialog: MatDialog) { }
  public tracks: Track[];
  public deletedTrack: Track;
  public updateTrack: Track;
  public updatedComment: string;

  ngOnInit() {
    this.muzixService.getPlayList().subscribe((data) => {
      this.tracks = data;
      console.log(this.tracks);

    })
    // this.tracks = this.muzixService.trackList;
  }

  removeTrack(track: Track) {
    this.muzixService.removeTrack(track).subscribe(
      (data) => {
      this.deletedTrack = data;
        // console.log(this.deletedTrack);
        alert("removed from playlist");
        this.muzixService.getPlayList().subscribe(
          (data) => this.tracks = data
        )
      })
  }

  openDialog(track: Track) {
    this.updateTrack = track;
    const dialogRef = this.dialog.open(PlayListCommentDialogue,
      {
        width: '250px',
        data: {}
      });
    dialogRef.afterClosed().subscribe(result => {
      this.updatedComment = result;
      this.editTrack();
    });
  }
  editTrack() {
    this.updateTrack.name = this.updatedComment;
    this.muzixService.editTrack(this.updateTrack).subscribe(
      data => {
        console.log("updated Track ", data);
        this.muzixService.getPlayList().subscribe(
          data => { this.tracks = data }
        )
      }
    );
  }
}
@Component({
  selector: 'play-list-comment-dialogue',
  templateUrl: 'play-list.component1.html',
})
export class PlayListCommentDialogue {
  constructor(
    public dialogRef: MatDialogRef<PlayListCommentDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: Track) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
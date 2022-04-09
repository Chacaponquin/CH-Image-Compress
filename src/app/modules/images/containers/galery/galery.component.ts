import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/services/images/images.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit {
  constructor(
    private userService: UserService,
    private imagesService: ImagesService
  ) {}

  userImages: { _id: string; url: string }[];

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => {
      this.userImages = user.images;
    });
  }

  uploadImage(image: File): void {
    this.imagesService.uploadImage(image);
  }
}

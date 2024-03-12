import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  loaded: boolean = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.getAlbums(); 
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }
}

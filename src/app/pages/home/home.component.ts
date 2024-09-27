import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, GalleriaModule, ImageModule, CardModule, InputTextModule, ReactiveFormsModule, FormsModule, InputTextareaModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  responsiveOptions: any[] | undefined;
  formGroup: FormGroup;

  images: any[] | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      name: [undefined],
      phone: [undefined],
      email: [undefined],
      message: [undefined],
    });
  }

  ngOnInit() {
    this.products = [
      {
        name: 'PRIVADOS',
        image: '1.jpg',
      },
      {
        name: 'CORPORATIVOS',
        image: '2.jpg',
      },
      {
        name: 'LABELS/BARES/BALADAS/EVENTUAIS',
        image: '1.jpg',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.images = [{itemImageSrc: './../../../assets/images/home-carrosel/3.jpg'}, {itemImageSrc: './../../../assets/images/home-carrosel/2.jpg'}]

    this.router.navigate(["/"]);
  }

  goContato() {
    document.getElementById("contato")?.scrollIntoView({ behavior: 'smooth' })
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ShareButtonsModule, ShareIconsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium`,
      name: "SM-7700 серебристый",
      description: "Блендер",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000"
    },
    {
      id: 2,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium`,
      name: "BEREKE BR-810 серый",
      description: "Электрочайник",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000"
    },
    {
      id: 3,
      image: `https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium`,
      name: "LG F2J3NS0W белый",
      description: "Стиральная машина",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000"
    },
    {
      id: 4,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      name: "Generic SF-400",
      description: "Кухонные весы",
      rating: 5,
      link: "https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000"
    },
    {
      id: 5,
      image: `https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=gallery-medium`,
      name: "Maxmoll H2O Humid-300 белый",
      description: "Увлажнитель воздуха",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000"
    },
    {
      id: 6,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h49/h36/64432195403806.jpg?format=gallery-medium`,
      name: "Proliss Pro-808 черный",
      description: "Вафельница",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/vafel-nitsa-proliss-pro-808-chernyi-105935489/?c=750000000"
    },
    {
      id: 7,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h41/h50/63775335186462.jpg?format=gallery-medium`,
      name: "Delonghi MultiGrill CGH 1030D",
      description: "Электрогриль",
      rating: 5,
      link: "https://kaspi.kz/shop/p/elektrogril-delonghi-multigrill-cgh-1030d-12600018/?c=750000000"
    },
    {
      id: 8,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h33/h3b/65015408984094.jpg?format=gallery-medium`,
      name: "СОЮЗ ТВС-2023МК синий",
      description: "Тепловентилятор",
      rating: 5,
      link: "https://kaspi.kz/shop/p/teploventiljator-sojuz-tvs-2023mk-sinii-107318963/?c=750000000"
    },
    {
      id: 9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h41/h7e/63777040302110.jpg?format=gallery-medium`,
      name: "Artel VCC 0220 серый",
      description: "Пылесос",
      rating: 5,
      link: "https://kaspi.kz/shop/p/artel-vcc-0220-seryi-3701268/?c=750000000"
    },
    {
      id: 10,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h5b/hfb/67838348722206.jpg?format=gallery-medium`,
      name: "Magna M20B7003-BL черный",
      description: "Микроволновая печь",
      rating: 5,
      link: "https://kaspi.kz/shop/p/magna-m20b7003-bl-chernyi-108426671/?c=750000000"
    },
  ]
  
}

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

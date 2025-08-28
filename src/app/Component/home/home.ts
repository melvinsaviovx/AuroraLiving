import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  headline: string = "Innovate | Build | Promote";
  subheadline: string = "At de&ex, we believe that a building is more than just bricks and mortar. It is the embodiment of dreams, visions and aspirations With our team of young and well qualified Architects, experienced engineers and craftsmen, we strive to turn those dreams into reality.";
  ctaText: string = "View Portfolio";
}
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service'; import { GifListComponent } from "../../components/gif-list/gif-list.component";



@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {

  gifService = inject(GifService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')


  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement

    if (!scrollDiv) return


    const scrollTop = scrollDiv.scrollTop;

    const clienHeight = scrollDiv.clientHeight
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clienHeight + 300 >= scrollHeight;

    console.log(isAtBottom);

  }

}

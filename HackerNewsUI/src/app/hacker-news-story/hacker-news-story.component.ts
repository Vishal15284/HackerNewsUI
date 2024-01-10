import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { HackerNewsStory } from '../models/hackerNews.model';
import { HttpService } from '../_services/http.services';
import { environment } from '../../environment/environment';
import { PaginationComponent } from '../common/pagination/pagination.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hacker-news-story',
  standalone: true,
  imports: [CommonModule,PaginationComponent],
  templateUrl: './hacker-news-story.component.html',
  styleUrl: './hacker-news-story.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class HackerNewsStoryComponent implements OnInit {
  public hackerNewsStories: HackerNewsStory[] = [];
  public hackerNewsStoriesItems: HackerNewsStory[] = [];
  public current: number = 1;
  public total: number = 1;
  public perPage = 10
  isHackerNews:boolean=false;
  constructor(private httpServices: HttpService) {
    
  }
  ngOnInit() {
    this.getStories("");
  }

  getStories(searchInput: string) {
    this.httpServices.getAll<HackerNewsStory[]>(environment.getNewsStories + searchInput).subscribe((result: any) => {
      this.hackerNewsStories = result;
      this.isHackerNews=true;
      this.current=1;
      this.total = Math.ceil(this.hackerNewsStories.length / this.perPage);
      this.hackerNewsStoriesItems = this.paginate(this.current, this.perPage);
    })
  }

  searchStories(searchInput: any) {
    searchInput == null ? "" : searchInput;
    this.getStories(searchInput.value);
  }
  onClick(url: string) {
    window.open(url);
  }

  public onGoTo(page: number): void {
    this.current = page
    this.hackerNewsStoriesItems = this.paginate(this.current, this.perPage)
  }

  public onNext(page: number): void {
    this.current = page + 1
    this.hackerNewsStoriesItems = this.paginate(this.current, this.perPage)
  }

  public onPrevious(page: number): void {
    this.current = page - 1
    this.hackerNewsStoriesItems = this.paginate(this.current, this.perPage)
  }

  public paginate(current: number, perPage: number): HackerNewsStory[] {
    return [...this.hackerNewsStories.slice((current - 1) * perPage).slice(0, perPage)]
  }
}

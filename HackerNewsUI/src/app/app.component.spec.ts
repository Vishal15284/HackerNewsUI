import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HackerNewsStoryComponent } from './hacker-news-story/hacker-news-story.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './_services/http.services';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,AppComponent, HackerNewsStoryComponent],
      providers:[HttpService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'HackerNews' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HackerNews');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, HackerNews');
  });
});

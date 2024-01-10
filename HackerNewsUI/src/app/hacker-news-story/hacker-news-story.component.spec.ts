import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsStoryComponent } from './hacker-news-story.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpService } from '../_services/http.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('HackerNewsStoryComponent', () => {
  let component: HackerNewsStoryComponent;
  let fixture: ComponentFixture<HackerNewsStoryComponent>;
  //let httpMock: HttpTestingController;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackerNewsStoryComponent,HttpClientModule],     
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[HttpService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HackerNewsStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
    //httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

it('should display title', () => {
  //fixture.detectChanges();
  TestBed.configureTestingModule({
    imports: [HackerNewsStoryComponent,HttpClientModule],     
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[HttpService]
  })
  .compileComponents();
  let fixture: ComponentFixture<HackerNewsStoryComponent>;
  fixture = TestBed.createComponent(HackerNewsStoryComponent);
  let h2: HTMLElement;
  h2 = fixture.nativeElement.querySelector('h2');
  expect(h2.textContent).toContain('Hacker News Stories');
});

// it('should retrieve stories from the server', () => {
//   const mockHackerNewsStories = [
//     {
//       "by": "vidyesh",
//       "descendants": 0,
//       "id": 38863083,
//       "score": 1,
//       "time": 1704343335,
//       "title": "Record number of electric, hybrid cars sold in France in 2023",
//       "type": "story",
//       "url": "https://www.rfi.fr/en/france/20240101-record-number-of-electric-hybrid-cars-sold-in-france-in-2023"
//     },
//     {
//       "by": "vidyesh1",
//       "descendants": 0,
//       "id": 38863084,
//       "score": 11,
//       "time": 1704343336,
//       "title": "Record number of electric, hybrid cars sold in France in 20231",
//       "type": "story1",
//       "url": "https://www.rfi.fr/en/france/20240101-record-number-of-electric-hybrid-cars-sold-in-france-in-20231"
//     }
//   ];
//   TestBed.configureTestingModule({
//     imports: [HackerNewsStoryComponent,HttpClientModule],     
//     schemas: [CUSTOM_ELEMENTS_SCHEMA],
//     providers:[HttpService]
//   })
//   .compileComponents();
//   let component: HackerNewsStoryComponent;
//   let fixture: ComponentFixture<HackerNewsStoryComponent>;
//   let httpMock: Htt;
//   fixture = TestBed.createComponent(HackerNewsStoryComponent);
//   component = fixture.componentInstance;


//   const req = httpMock.expectOne("http://localhost:5109/api/"+ environment.getNewsStories);
//   expect(req.request.method).toEqual('GET');
//   req.flush(mockHackerNewsStories);

//   expect(component.hackerNewsStories).toEqual(mockHackerNewsStories);
// });
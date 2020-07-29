import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastCardsListComponent } from './podcast-cards-list.component';

describe('PodcastCardsListComponent', () => {
  let component: PodcastCardsListComponent;
  let fixture: ComponentFixture<PodcastCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

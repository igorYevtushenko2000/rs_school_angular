import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastCardPageComponent } from './podcast-card-page.component';

describe('PodcastCardPageComponent', () => {
  let component: PodcastCardPageComponent;
  let fixture: ComponentFixture<PodcastCardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastCardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

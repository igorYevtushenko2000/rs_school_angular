import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastCardFormComponent } from './podcast-card-form.component';

describe('PodcastCardFormComponent', () => {
  let component: PodcastCardFormComponent;
  let fixture: ComponentFixture<PodcastCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

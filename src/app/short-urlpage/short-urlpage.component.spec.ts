import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortURLpageComponent } from './short-urlpage.component';

describe('ShortURLpageComponent', () => {
  let component: ShortURLpageComponent;
  let fixture: ComponentFixture<ShortURLpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortURLpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortURLpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

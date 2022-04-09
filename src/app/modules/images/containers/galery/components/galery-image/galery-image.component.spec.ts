import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryImageComponent } from './galery-image.component';

describe('GaleryImageComponent', () => {
  let component: GaleryImageComponent;
  let fixture: ComponentFixture<GaleryImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

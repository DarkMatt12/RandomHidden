import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComponent } from './random.component';

describe('RandomComponentComponent', () => {
  let component: RandomComponent;
  let fixture: ComponentFixture<RandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

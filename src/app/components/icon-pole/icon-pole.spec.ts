import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPole } from './icon-pole';

describe('IconPole', () => {
  let component: IconPole;
  let fixture: ComponentFixture<IconPole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

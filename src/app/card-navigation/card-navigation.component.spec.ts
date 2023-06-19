import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNavigationComponent } from './card-navigation.component';

describe('CardNavigationComponent', () => {
  let component: CardNavigationComponent;
  let fixture: ComponentFixture<CardNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNavigationComponent]
    });
    fixture = TestBed.createComponent(CardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

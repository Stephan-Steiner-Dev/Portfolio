import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPolloLoccoComponent } from './el-pollo-locco.component';

describe('ElPolloLoccoComponent', () => {
  let component: ElPolloLoccoComponent;
  let fixture: ComponentFixture<ElPolloLoccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElPolloLoccoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElPolloLoccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PrimengtestTestModule } from '../../../test.module';
import { EmployeeSkillCertificateDetailComponent } from 'app/entities/employee-skill-certificate/employee-skill-certificate-detail.component';
import { EmployeeSkillCertificate } from 'app/shared/model/employee-skill-certificate.model';

describe('Component Tests', () => {
  describe('EmployeeSkillCertificate Management Detail Component', () => {
    let comp: EmployeeSkillCertificateDetailComponent;
    let fixture: ComponentFixture<EmployeeSkillCertificateDetailComponent>;
    const route = ({
      data: of({ employeeSkillCertificate: new EmployeeSkillCertificate(123, 'AAAAAAA', 'AAAAAAA') })
    } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [PrimengtestTestModule],
        declarations: [EmployeeSkillCertificateDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(EmployeeSkillCertificateDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(EmployeeSkillCertificateDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load employeeSkillCertificate on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.employeeSkillCertificate).toEqual(
          jasmine.objectContaining({ typeId: 123, skillName: 'AAAAAAA', skillEmployeeUsername: 'AAAAAAA' })
        );
      });
    });
  });
});

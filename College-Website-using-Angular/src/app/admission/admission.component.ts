import { Component } from '@angular/core';

interface Course {
  name: string;
  seats: number;
  duration: string;
  eligibility: string;
  additionalInfo?: string;
}

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {
  courses: Course[] = [
    {
      name: 'B.Tech - Information Technology',
      seats: 30,
      duration: '4 Years (Eight Semesters)',
      eligibility: '10+2 or equivalent with minimum 45% marks (40% for reserved category) in P+C+M / P+C+B+M taken together and pass in English.'
    },
    {
      name: 'B.Tech - Computer Science & Engineering',
      seats: 60,
      duration: '4 Years (Eight Semesters)',
      eligibility: '10+2 or equivalent with minimum 45% marks (40% for reserved category) in P+C+M / P+C+B+M taken together and pass in English.'
    },
    {
      name: 'B.Tech - Bioinformatics',
      seats: 30,
      duration: '4 Years (Eight Semesters)',
      eligibility: '10+2 or equivalent with minimum 45% marks (40% for reserved category) in P+C+M / P+C+B+M / P+C+B taken together and pass in English.',
      additionalInfo: 'Admission Academic Program (AICTE Approval Awaited)'
    },
    {
      name: 'Master of Computer Application (MCA)',
      seats: 30,
      duration: '3 Years (Six Semesters)',
      eligibility: '3 year recognized bachelor degree with minimum 50% marks (45% for reserved category) & mathematics at 10+ 2/ equivalent level.'
    },
    {
      name: 'Bachelor of Computer Application (BCA)',
      seats: 30,
      duration: '3 Years (Six Semesters)',
      eligibility: '10+2 or equivalent with minimum 45% marks (40% for reserved category) in P+C+M / P+C+B+M taken together and pass in English.'
    }
  ];
}

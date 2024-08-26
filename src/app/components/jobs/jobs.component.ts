import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../interfaces/job.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs!: Job[];
  
  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobsService.getJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
  }

}

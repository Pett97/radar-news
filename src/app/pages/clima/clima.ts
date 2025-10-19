import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima/clima.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clima',
  imports: [CommonModule],
  standalone: true,
  providers: [ClimaService],
  templateUrl: './clima.html',
  styleUrl: './clima.css'
})
export class Clima implements OnInit {
  consultaClima: any = '';

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
    this.buscarClima().subscribe({
      next: (data) => {
        this.consultaClima = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private buscarClima(): Observable<any> {
    return this.climaService.getClima();
  }
}

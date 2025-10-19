import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima/clima.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clima',
  imports: [],
  standalone: true,
  providers: [ClimaService],
  templateUrl: './clima.html',
  styleUrl: './clima.css'
})
export class Clima implements OnInit {
  constructor(private climaService: ClimaService) { }


  ngOnInit(): void {
    this.buscarClima().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      }
    }
    )
  }


  private buscarClima(): Observable<any> {
    return this.climaService.getClima();
  }

}

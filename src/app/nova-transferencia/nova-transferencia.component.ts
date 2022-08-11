import { TransferenciaService } from './../service/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limpaCampos;

        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limpaCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}

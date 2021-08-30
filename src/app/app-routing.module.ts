import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoComponent } from './components/banco/banco.component';

import { CardComponent } from './components/card/card.component';
import { ClientepfComponent } from './components/clientepf/clientepf.component';
import { ClientepjComponent } from './components/clientepj/clientepj.component'
import { ProdutoComponent } from './components/produto/produto.component';
import { HomeComponent } from './components/home/home.component';
import { DadosBancariosPfPjComponent } from './components/dados-bancarios-pf-pj/dados-bancarios-pf-pj.component';
import { ContatoComponent } from './components/contato/contato.component';
import { OperadorComponent } from './components/operador/operador.component';
import { PlanoEmprestimoCartaoCreditoComponent } from './components/plano-emprestimo-cartao-credito/plano-emprestimo-cartao-credito.component';

import { DocumentoDigitalComponent } from './components/documento-digital/documento-digital.component';

import { EnderecoComponent } from './components/endereco/endereco.component';

import { TesteNgxMaskComponent } from './components/teste-ngx-mask/teste-ngx-mask.component';
import { PropostaComponent } from './components/proposta/proposta.component';
import { SlideCourseCardComponent } from './lms-frontend/slide-course-card/slide-course-card.component';
const routes: Routes = [     
  {
    path: '**', redirectTo: 'app-root', pathMatch: 'full'
  },{
    path: '', component: HomeComponent
  },   
  {
    path: 'banco', component: BancoComponent
  },  
  {
    path: 'card', component: CardComponent
  },
  {
    path: 'clientepf', component: ClientepfComponent
  },
  {
    path: 'clientepj', component: ClientepjComponent
  },
  {
    path: 'contato', component: ContatoComponent
  },
  {
    path: 'dados-bancarios-pf-pj', component: DadosBancariosPfPjComponent
  },
  {
    path: 'endereco', component: EnderecoComponent
  },
  {
    path: 'produto', component: ProdutoComponent
  },
  {
    path: 'operador', component: OperadorComponent
  },
  {
    path: 'plano-emprestimo-cartao-credito', component: PlanoEmprestimoCartaoCreditoComponent
  },
  {
    path: 'proposta', component: PropostaComponent
  },
  {

    path: 'documento-digital', component: DocumentoDigitalComponent
  },
  {

    path: 'teste-ngx-mask', component: TesteNgxMaskComponent
  },
  {
    path: 'slide-crouse-card', component: SlideCourseCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

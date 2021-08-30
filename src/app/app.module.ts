import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxCurrencyModule } from "ngx-currency";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { ClientepfComponent } from './components/clientepf/clientepf.component';
import { ClientepjComponent } from './components/clientepj/clientepj.component';
import { DadosBancariosPfPjComponent } from './components/dados-bancarios-pf-pj/dados-bancarios-pf-pj.component';
import { OperadorComponent } from './components/operador/operador.component';
import { MenuRodapeComponent } from './components/menu-rodape/menu-rodape.component';
import { BancoComponent } from './components/banco/banco.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { HomeComponent } from './components/home/home.component';
import { Erro404Component } from './components/erro404/erro404.component';
import { PlanoEmprestimoCartaoCreditoComponent } from './components/plano-emprestimo-cartao-credito/plano-emprestimo-cartao-credito.component';
import { TesteNgxMaskComponent } from './components/teste-ngx-mask/teste-ngx-mask.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { PropostaComponent } from './components/proposta/proposta.component';
import { DocumentoDigitalComponent } from './components/documento-digital/documento-digital.component';
import { LoginModalPopupsComponent } from './components/login-modal-popups/login-modal-popups.component';
import { SlideCourseCardComponent } from './lms-frontend/slide-course-card/slide-course-card.component';


 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    ClientepfComponent,
    ClientepjComponent,
    DadosBancariosPfPjComponent,
    DocumentoDigitalComponent,
    OperadorComponent,
    MenuRodapeComponent,
    BancoComponent,
    ContatoComponent,
    ProdutoComponent,
    HomeComponent,
    EnderecoComponent,
    Erro404Component,
    PlanoEmprestimoCartaoCreditoComponent,
    TesteNgxMaskComponent,
    PropostaComponent,
    PlanoEmprestimoCartaoCreditoComponent,
    LoginModalPopupsComponent,
    SlideCourseCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false // Ao salvar, vai manter a mascara
    }),
    NgxCurrencyModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

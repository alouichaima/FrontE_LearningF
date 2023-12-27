import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message: any = {};

  constructor(private messageService: MessageService) {}

  sendMessage(): void {
    this.messageService.sendMessage(this.message)
      .subscribe(response => {
        console.log('Message envoyé avec succès', response);
        // Ajoutez ici la logique pour gérer la réponse du serveur
      }, error => {
        console.error('Erreur lors de l\'envoi du message', error);
        // Ajoutez ici la logique pour gérer les erreurs
      });
  }

}

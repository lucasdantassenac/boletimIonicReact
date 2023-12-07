import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
export const appPages: AppPage[] = [
    {
      title: 'Home',
      url: '/',
      iosIcon: mailOutline,
      mdIcon: mailSharp
    },
    {
      title: 'Alunos',
      url: '/alunos',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Configurações',
      url: '/configuracoes',
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },

  ];
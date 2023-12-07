import { IonButton, IonText, IonTitle } from "@ionic/react"
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import {StudentsList} from '../../components/StudentsList'
export const Students = () => {
    const calculateMedia = (notes: number[]) => {
        let media = 0
        notes.forEach(note => {
            media += note
        })
        return media/notes.length
    }

    return (
        <>  
            
            {StudentsList.map((student, index) => {
                return(
                    <IonCard>
                        <img alt={student.name} src="https://ionicframework.com/docs/img/demos/card-media.png" />
                        <IonCardHeader>
                            <IonCardTitle>{student.name}</IonCardTitle>
                            <IonCardSubtitle>{calculateMedia(student.notes)}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonButton fill="outline" shape='round' color='primary'>Editar</IonButton>
                        <IonButton fill="outline" shape='round' color='danger'>Deletar</IonButton>
                    </IonCard>
                )
            })}
        
        </>
    )
}
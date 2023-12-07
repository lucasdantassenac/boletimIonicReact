import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonList } from '@ionic/react';
import { Student } from '../../../Types/Student';
import {StudentsList} from '../../../components/StudentsList'


export function editForm({id, name, birthday, sex, photoUrl, notes}:Student) {
    const editStudent = ((currentId:number) => {

    })

    const [currentStudentData, setCurrentStudentData] = useState({
        id,
        name,
        birthday,
        sex,
        photoUrl,
        notes
    })
  return (
    <>
        <IonList>
            <IonItem>
                <IonInput 
                    label="Id do aluno"
                    value={id}
                    readonly={true}
                    onIonChange={
                        e => 
                        {
                            setCurrentStudentData
                        }
                }
                ></IonInput>
            </IonItem>

            <IonItem>
                <IonInput label="Nome" value={name}></IonInput>
            </IonItem>

        </IonList>

        <IonButton fill="outline" shape='round' color='primary' onClick={editStudent(id)}>Confirmar</IonButton>

    </>
  );
}
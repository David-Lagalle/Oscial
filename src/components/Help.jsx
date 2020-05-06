
import React from "react";
import { Text, View } from "react-native";
import "./Help.css";

export default class Help extends React.Component {
    render() {
      return (
        <View>
          <Text>
            <h1 id='titre'>Quel est mon problème ?</h1>
            <div className='content'>
                <p>
                    On porte atteinte à ma personne ou 
                    à quelqu'un d'autre. Je trouve un contenu offensant, dégradant.
                     One ne respecte pas mes droits.
                </p>
                <button className="btn btn-success"  id='centre1'> 
                    Signaler 

                </button>
            </div>

            <div className='content'>
                <p>
                    J'ai des questions qui concernent l'application sur son fionctionnement,
                    sa gestion. Je souhaite savoir comment sont utilisés mes données personnelles. 
                </p>

                <button className="btn btn-success"  id='centre2'> 
                     F.A.Q. 
                </button>
            </div>

            <div className='content'>
                <p>
                    Je suis manager de mon établissement et je souhaite acceder 
                    à tous les signalements, à la liste de personnde dans mon établissement.
                </p>

                <button className="btn btn-success " id='centre3'> 
                    Accéder à la liste
                </button>
            </div>

          </Text>
        </View>
      );
    }
  }
  
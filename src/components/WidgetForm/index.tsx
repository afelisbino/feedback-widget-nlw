import {CloseButton} from '../CloseButton';

import bugImg from '../../assets/Bug.svg'
import ideaImg from '../../assets/Idea.svg'
import otherImg from '../../assets/Thought.svg'

import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const typeFeedback = {
    BUG: {
        title:"Problema",
        image: {
            source: bugImg,
            alt: "Imagem de uma minhoca"
        }
    },
    IDEA: {
        title:"Ideia",
        image: {
            source: ideaImg,
            alt: "Imagem de uma lampada"
        }
    },
    OTHER: {
        title:"Outro",
        image: {
            source: otherImg,
            alt: "Imagem de uma nuvem"
        }
    }
}

export type FeedbackType = keyof typeof typeFeedback;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           
            {
                feedbackSent ? (
                    <FeedbackSuccessStep  onFeedbackRestartRequested={handleRestartFeedback} />
                ): (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                        ) : (
                            <FeedbackContentStep 
                                feedbackType={feedbackType}
                                onFeedbackRestartRequested={handleRestartFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            />
                        )}
                    </>
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito na NLW Return ♥ junto com a Rocketseat
            </footer>
        </div>
    )
}
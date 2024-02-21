import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import {Avatar} from './avatar';

export function Comment ({content}){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/SahRB.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sabrina Barros</strong>
                            <time title ="15 de Fevereiro às 10:00" dateTime="2024-02-15 10:00:00"> Cerca de 1h atrás </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>

                    </button>
                    
                    
                </footer>

            </div>

        </div>
    )
}
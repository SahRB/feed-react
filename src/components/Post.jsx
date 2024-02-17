import styles from './Post.module.css';
import {Comment} from './Comment';
import {Avatar} from './avatar';



export function Post(props){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar hasBorder={true} src="https://github.com/SahRB.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Sabrina Barros</strong>
                        <span>Software Developer</span>

                    </div>
                </div>
                <time dateTime="">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe seu comentário"/>
                <footer>
                <button type="submit">Postar</button>
                </footer>
                
            </form>
            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    );
}
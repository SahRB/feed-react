import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/SahRB.png"></img>
                    <div className={styles.authorInfo}>
                        <strong>Sabrina Barros</strong>
                        <span>Software Developer</span>

                    </div>
                </div>
                <time dateTime="">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p> Acabei de subir mais um projeto no meu portifa. </p>
                <p>É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
                <p> O nome do projeto é DoctorCare 🚀</p>
                <p><a href='#'>👉 jane.design/doctorcare</a></p>
                <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe seu comentário"/>
                <footer>
                <button type="submit">Postar</button>
                </footer>
                
            </form>
        </article>
    );
}
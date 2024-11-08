import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;  
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    // function handleLikeComment() {
    //     setLikeCount(likeCount + 1)
    // }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
        // podemos usar o set do useState de duas formas: como funçao(este codigo), 
        // ou da maneira que está comentado acima. se usarmos da maneira comentada acima, 
        // o react cria outro contexto pra executar o likeCount. logo, o like nao aumenta logo
        // quando o código é executado, e sim apos a funçao inteira ser executada. usando neste padrao
        // de arrow function, podemos pegar o valor mais recente de likes e alterar ele diretamente
        // neste caso, como precisamos saber o valor antigo de likes e alterar baseado nele, é interessante
        // usarmos dessa forma
        // isso é Closure, no react
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/cferrugem.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndtime}>
                            <strong>Cleiton Ferrugem</strong>
                            <time title='12 de Setembro às 19:12h' dateTime="2024-10-12 19:12:25">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
            </div>
        </div>
    )
}
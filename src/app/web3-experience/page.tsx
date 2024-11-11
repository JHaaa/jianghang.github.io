import styles from './Web3ExperiencePage.module.css';

const Web3ExperiencePage = () => {
    return (
        <div className={styles.container}>
            <h1>Web3 Experience</h1>
            <div className={styles.listContainer}>
                <p>
                  Crypto investor since 2018; joined 
                    <a href="https://globalcoinresearch.com/" target="_blank" rel="noopener noreferrer"> Global Coin Research (GCR)</a> in 2021 and served as Head of Research during 2021-2022. 
                    Now active as a core-team member, investing and sporadically sharing thoughts within the 
                    <a href="https://discord.com/invite/globalcoinresearch" target="_blank" rel="noopener noreferrer"> GCR community on Discord</a>.
                </p>
                
                <h3 className={styles.header}>Articles</h3>
                <ul className={styles.customList}>
                    <li>
                        Jiang, Hang. (2022). 
                        <a className={styles.link} href="https://mirror.xyz/globalcoinresearch.eth/0oJnV52MRJ-bYCMz9vQnT3ZBDaGal5A0mJM9gzXIb8k" target="_blank" rel="noopener noreferrer">
                            &ldquo;How Much Liquidity is Needed to Solve Sandwich Attacks,&rdquo; <em>Global Coin Research</em>, March 2022.
                        </a>
                    </li>
                    <li>
                        Jiang, Hang. (2021). 
                        <a className={styles.link} href="https://mirror.xyz/globalcoinresearch.eth/ZW0f3noANH-WEUg7GTYbt6Yk98PZA19tjp-XIHSv7pU" target="_blank" rel="noopener noreferrer">
                            &ldquo;What Does DAO 2.0 Tokenomics Look Like,&rdquo; <em>Global Coin Research</em>, December 2021.
                        </a>
                    </li>
                </ul>

                <h3 className={styles.header}>My Talks in 2021-2022</h3>
                <ul className={styles.customList}>
                    <li>&ldquo;Deep Dive into Livepeer (Web3 Video Infrastructure)&rdquo; <a href="https://www.youtube.com/watch?v=NDndnjvOXN8" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                    <li>&ldquo;Deep Dive into Web3 Social Graphs&rdquo; <a href="https://www.youtube.com/watch?v=wYQdmAEnJTg" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                    <li>&ldquo;Who will be Next Ethereum Killers?&rdquo; <a href="https://www.youtube.com/watch?v=Y_GRlUq8daM" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                    <li>&ldquo;The Rise of Investment DAOs&rdquo; <a href="https://discord.com/channels/461610456163811354/859873106515591188/1025443505914531981" target="_blank" rel="noopener noreferrer">[Slides]</a></li>
                    <li>&ldquo;Deep Dive into Lens Protocol&rdquo; <a href="https://www.youtube.com/watch?v=6P225vtAP9E&t=90s" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                    <li>&ldquo;Deep Dive into Metaverse Platforms&rdquo; <a href="https://www.youtube.com/watch?v=IITsL6527WU" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                    <li>&ldquo;Deep Dive into Terra Ecosystem&rdquo; <a href="https://www.youtube.com/watch?v=5n9huQog-Mk" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                    <li>&ldquo;How to Evaluate DeFi Projects&rdquo; <a href="https://www.youtube.com/watch?v=UOLRFBN5elc" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                    <li>&ldquo;A map of GCR&apos;s Top Investments&rdquo; <a href="https://www.youtube.com/watch?v=R7f-fSYy9a8" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                    <li>&ldquo;Deep Dive into Apricot Finance &amp; DeFi Landscape in SOLANA&rdquo; <a href="https://www.youtube.com/watch?v=62xWpBvsx7w" target="_blank" rel="noopener noreferrer">[YouTube]</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Web3ExperiencePage;

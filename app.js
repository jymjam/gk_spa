// Simple Router
class Router {
    constructor() {
        this.routes = {};
        this.currentPath = '/';
        this.init();
    }

    register(path, templateFn) {
        this.routes[path] = templateFn;
    }

    init() {
        window.addEventListener('hashchange', () => this.navigate());
        this.navigate();
    }

    navigate() {
        const hash = window.location.hash.slice(1) || '/';
        this.currentPath = hash;
        this.render();
        this.updateActiveLink();
    }

    render() {
        const app = document.getElementById('app');
        const templateFn = this.routes[this.currentPath] || this.routes['/'];
        app.innerHTML = templateFn();
    }

    updateActiveLink() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === this.currentPath) {
                link.classList.add('active');
            }
        });
    }
}

// Page Templates
const pages = {
    home: () => `
        <div class="page">
            <div class="hero">
                <h1>🕉️ Sanatani Rituals</h1>
                <p>Explore the sacred traditions and timeless rituals of Sanatana Dharma. Connect with centuries of spiritual wisdom and sacred practices.</p>
            </div>

            <div class="section">
                <h2>Spiritual Traditions</h2>
                <div class="cards-grid">
                    <div class="card">
                        <div class="card-icon">🙏</div>
                        <h3>Puja & Worship</h3>
                        <p>Sacred rituals performed to honor the divine. Learn about different forms of worship and their significance in spiritual life.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon">🔥</div>
                        <h3>Yagna & Fire Rituals</h3>
                        <p>Ancient fire ceremonies that connect us to the cosmic forces. Understand the spiritual power of sacred fires.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon">📿</div>
                        <h3>Meditation & Yoga</h3>
                        <p>Paths to inner peace and self-realization. Discover practices that have enlightened sages for millennia.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    rituals: () => `
        <div class="page">
            <div class="hero">
                <h1>🕉️ Sacred Rituals</h1>
                <p>Detailed guide to the most important Sanatani rituals and their spiritual significance.</p>
            </div>

            <div class="section">
                <h2>Common Rituals & Ceremonies</h2>

                <div class="content-box">
                    <div class="card-icon">🌅</div>
                    <h3>Surya Namaskar (Sun Salutation)</h3>
                    <p>A powerful flowing practice of 12 asanas performed at sunrise. It honors the sun, strengthens the body, and purifies the mind. Each position represents a different aspect of the sun's energy and is accompanied by specific mantras.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">💧</div>
                    <h3>Abhisheka (Sacred Bath)</h3>
                    <p>A ritual bathing ceremony performed on deities in temples. Holy water, milk, honey, and other sacred substances are poured over the deity while chanting mantras. This practice symbolizes purification and devotion.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">🪷</div>
                    <h3>Aarti (Light Offering)</h3>
                    <p>A ritual of waving a lamp or flame before a deity as an offering of light and devotion. Aarti is performed at specific times of day and is accompanied by ringing bells and chanting sacred hymns.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">🔥</div>
                    <h3>Havan (Fire Ceremony)</h3>
                    <p>A sacred ritual where offerings are made to the sacred fire while chanting Vedic mantras. The fire carries prayers to the divine and purifies the environment. Performed during auspicious occasions and daily spiritual practice.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">🌾</div>
                    <h3>Pradakshina (Circumambulation)</h3>
                    <p>Clockwise circumambulation around a sacred object, deity, or place. This ritual shows reverence and devotion while the devotee mentally focuses on the divine. Often accompanied by prayers and mantras.</p>
                </div>
            </div>
        </div>
    `,

    daily: () => `
        <div class="page">
            <div class="hero">
                <h1>📿 Daily Spiritual Practices</h1>
                <p>Incorporate these daily practices into your life for spiritual growth and inner peace.</p>
            </div>

            <div class="section">
                <h2>Daily Sadhana (Spiritual Practice)</h2>

                <div class="content-box">
                    <div class="card-icon">🌅</div>
                    <h3>Morning Ritual (Pratah Kaal Sadhana)</h3>
                    <p><strong>Best time:</strong> Before sunrise<br>
                    Wake up early, bathe, and meditate. Perform pranayama (breathing exercises) followed by chanting mantras. This sets a positive tone for the entire day and connects you with cosmic energy.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">📿</div>
                    <h3>Mantra Japa (Chanting)</h3>
                    <p>Recite sacred mantras 108 times using a mala (prayer beads). This practice purifies the mind, strengthens concentration, and invokes divine blessings. Choose a mantra that resonates with your spiritual path.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">🧘</div>
                    <h3>Meditation (Dhyana)</h3>
                    <p>Dedicate 20-30 minutes to meditation daily. Focus on your breath, a mantra, or a divine form. This practice develops inner peace, clarity, and connection with the higher self.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">📚</div>
                    <h3>Vedic Study (Svadhyaya)</h3>
                    <p>Read and contemplate sacred texts like the Bhagavad Gita, Upanishads, or other Hindu scriptures. Understanding spiritual wisdom helps guide your actions and thoughts throughout the day.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">🙏</div>
                    <h3>Evening Prayer (Sandhya Puja)</h3>
                    <p>Make offerings and prayers during twilight hours. Thank the divine for the day's experiences and seek guidance. This ritual marks the transition between day and night with spiritual consciousness.</p>
                </div>
            </div>
        </div>
    `,

    festivals: () => `
        <div class="page">
            <div class="hero">
                <h1>🎉 Sacred Festivals</h1>
                <p>Celebrate the divine through major Hindu festivals and their spiritual significance.</p>
            </div>

            <div class="section">
                <h2>Major Festivals & Celebrations</h2>

                <div class="content-box">
                    <div class="card-icon">🪔</div>
                    <h3>Diwali (Deepavali)</h3>
                    <p>The Festival of Lights celebrates the victory of light over darkness and good over evil. Light lamps, exchange gifts, and create colorful rangoli. It symbolizes the triumph of Lord Rama and the awakening of inner light.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">🌸</div>
                    <h3>Holi (Festival of Colors)</h3>
                    <p>Celebrate the arrival of spring and the divine love of Lord Krishna. Play with colors, share sweets, and renew relationships. This festival represents the destruction of ego and the joy of life.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">🙏</div>
                    <h3>Navaratri & Durga Puja</h3>
                    <p>Nine nights celebrating the divine feminine energy and the victory of Goddess Durga over evil. Perform special pujas, fast, and dance in celebration. Each day honors different aspects of the Goddess.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">🎂</div>
                    <h3>Janmashtami</h3>
                    <p>Commemorate the birth of Lord Krishna with devotional singing and dancing. Fast until midnight when Krishna's birth is celebrated. Prepare special dishes and share them as blessed offerings.</p>
                </div>

                <div class="content-box">
                    <div class="card-icon">☀️</div>
                    <h3>Makar Sankranti</h3>
                    <p>Celebrate the sun's transition into the zodiac sign of Capricorn. Fly kites, take ritual baths, and prepare special foods made of sesame and jaggery. This festival marks spiritual and physical purification.</p>
                </div>
            </div>
        </div>
    `,

    about: () => `
        <div class="page">
            <div class="hero">
                <h1>About Sanatani Rituals</h1>
                <p>Understanding our sacred heritage and spiritual traditions.</p>
            </div>

            <div class="section">
                <h2>What is Sanatana Dharma?</h2>
                <div class="content-box">
                    <p>Sanatana Dharma, also known as Hinduism, is one of the world's oldest continuous spiritual traditions. The word "Sanatana" means eternal, and "Dharma" means righteousness or cosmic order. It encompasses a rich philosophy of life, spiritual practices, and ethical principles developed over thousands of years.</p>
                </div>

                <h2>Core Principles</h2>
                <div class="content-box">
                    <h3>🕉️ Unity in Diversity</h3>
                    <p>Recognizing the divine in all forms and respecting different paths to spiritual truth. There are many ways to worship and reach enlightenment.</p>
                </div>

                <div class="content-box">
                    <h3>📜 Karma & Dharma</h3>
                    <p>Your actions have consequences, and you are responsible for fulfilling your duties. Living righteously according to your role in society leads to spiritual progress.</p>
                </div>

                <div class="content-box">
                    <h3>🔄 Cycle of Life</h3>
                    <p>Understanding rebirth and the continuous cycle of creation, sustenance, and dissolution. Each soul progresses through many lives toward ultimate liberation (Moksha).</p>
                </div>

                <div class="content-box">
                    <h3>🧘 Self-Realization</h3>
                    <p>The ultimate goal is to realize your true nature and unity with the divine cosmic consciousness. This is achieved through knowledge, devotion, and righteous action.</p>
                </div>

                <h2>Why These Rituals Matter</h2>
                <p style="margin-bottom: 1rem;">Sacred rituals and practices are not mere superstitions but tools for:</p>
                <ul style="list-style-position: inside; margin-left: 1rem;">
                    <li>✨ Cultivating inner peace and mental clarity</li>
                    <li>✨ Connecting with the divine and higher consciousness</li>
                    <li>✨ Creating harmony with natural and cosmic rhythms</li>
                    <li>✨ Purifying body, mind, and spirit</li>
                    <li>✨ Building community and shared spiritual experiences</li>
                </ul>
            </div>
        </div>
    `
};

// Initialize Router
const router = new Router();
router.register('/', pages.home);
router.register('/rituals', pages.rituals);
router.register('/daily-practices', pages.daily);
router.register('/festivals', pages.festivals);
router.register('/about', pages.about);

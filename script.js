// AI Tools Database
const aiTools = [
    {
        name: "ChatGPT",
        category: "writing",
        icon: "💬",
        description: "Advanced AI chatbot for conversations, writing assistance, and problem-solving.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "Perplexity AI",
        category: "research",
        icon: "🔍",
        description: "AI-powered search engine that provides accurate answers with sources.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "GitHub Copilot",
        category: "coding",
        icon: "👨‍💻",
        description: "AI pair programmer that helps you write code faster and smarter.",
        type: "Paid",
        link: "#"
    },
    {
        name: "Midjourney",
        category: "design",
        icon: "🎨",
        description: "AI art generator that creates stunning images from text descriptions.",
        type: "Paid",
        link: "#"
    },
    {
        name: "Grammarly",
        category: "writing",
        icon: "📝",
        description: "AI writing assistant that helps with grammar, spelling, and style.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "Notion AI",
        category: "productivity",
        icon: "📋",
        description: "AI assistant integrated into Notion for writing, brainstorming, and organization.",
        type: "Paid",
        link: "#"
    },
    {
        name: "DALL-E",
        category: "design",
        icon: "🖼️",
        description: "Create realistic images and art from natural language descriptions.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "Otter.ai",
        category: "productivity",
        icon: "🎙️",
        description: "AI meeting assistant that transcribes and summarizes conversations.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "Jasper",
        category: "writing",
        icon: "✨",
        description: "AI content platform for creating marketing copy, blogs, and social media posts.",
        type: "Paid",
        link: "#"
    },
    {
        name: "Canva AI",
        category: "design",
        icon: "🎭",
        description: "AI-powered design tools for creating graphics, presentations, and videos.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "Replit Ghostwriter",
        category: "coding",
        icon: "👻",
        description: "AI code completion and assistance for multiple programming languages.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "Consensus",
        category: "research",
        icon: "📊",
        description: "AI-powered search engine for scientific research papers.",
        type: "Free",
        link: "#"
    },
    {
        name: "QuillBot",
        category: "writing",
        icon: "🪶",
        description: "AI paraphrasing tool for rewriting and improving your text.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "Claude",
        category: "writing",
        icon: "🤖",
        description: "AI assistant for writing, analysis, and creative tasks with long context.",
        type: "Free & Paid",
        link: "#"
    },
    {
        name: "Gamma",
        category: "productivity",
        icon: "📊",
        description: "Create presentations, documents, and websites with AI in seconds.",
        type: "Free & Paid",
        link: "#"
    }
];

let currentFilter = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayTools(aiTools);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Display tools in the grid
function displayTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';

    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

// Create a tool card element
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-category', tool.category);

    const badgeClass = tool.type === 'Paid' ? 'tool-badge paid' : 'tool-badge';

    card.innerHTML = `
        <div class="tool-icon">${tool.icon}</div>
        <h3>${tool.name}</h3>
        <span class="${badgeClass}">${tool.type}</span>
        <p class="tool-category">Category: ${tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}</p>
        <p>${tool.description}</p>
        <a href="${tool.link}" class="tool-link" onclick="return false;">Learn More</a>
    `;

    return card;
}

// Filter tools by category
function filterTools(category) {
    currentFilter = category;

    if (category === 'all') {
        displayTools(aiTools);
    } else {
        const filteredTools = aiTools.filter(tool => tool.category === category);
        displayTools(filteredTools);
    }

    // Smooth scroll to tools section
    document.getElementById('tools').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Search functionality
function searchTools() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    if (searchInput.trim() === '') {
        displayTools(aiTools);
        return;
    }

    const filteredTools = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(searchInput) ||
        tool.description.toLowerCase().includes(searchInput) ||
        tool.category.toLowerCase().includes(searchInput)
    );

    displayTools(filteredTools);

    // Scroll to tools section
    document.getElementById('tools').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchTools();
            }
        });
    }
});
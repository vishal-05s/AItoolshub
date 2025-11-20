// Store tools in browser localStorage
function getTools() {
    return JSON.parse(localStorage.getItem('aiTools')) || [];
}
function saveTools(tools) {
    localStorage.setItem('aiTools', JSON.stringify(tools));
}
function renderTools() {
    const toolsList = document.getElementById('toolsList');
    const tools = getTools();
    toolsList.innerHTML = '';
    tools.forEach((tool, idx) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <b>${tool.icon} ${tool.name}</b> (${tool.category}) <br>
            ${tool.description} - <i>${tool.type}</i>
            <br>
            <button onclick="editTool(${idx})">Edit</button>
            <button onclick="deleteTool(${idx})">Delete</button>
            <hr>
        `;
        toolsList.appendChild(li);
    });
}

document.getElementById('toolForm').onsubmit = function(e){
    e.preventDefault();
    const newTool = {
        name: document.getElementById('name').value.trim(),
        category: document.getElementById('category').value.trim(),
        icon: document.getElementById('icon').value.trim(),
        description: document.getElementById('description').value.trim(),
        type: document.getElementById('type').value.trim(),
        link: document.getElementById('link').value.trim(),
    };
    let tools = getTools();
    tools.push(newTool);
    saveTools(tools);
    renderTools();
    this.reset();
};

window.editTool = function(idx) {
    const tools = getTools();
    const tool = tools[idx];
    document.getElementById('name').value = tool.name;
    document.getElementById('category').value = tool.category;
    document.getElementById('icon').value = tool.icon;
    document.getElementById('description').value = tool.description;
    document.getElementById('type').value = tool.type;
    document.getElementById('link').value = tool.link;
    // Remove the tool being edited, user can re-add
    tools.splice(idx, 1);
    saveTools(tools);
    renderTools();
};

window.deleteTool = function(idx) {
    let tools = getTools();
    tools.splice(idx, 1);
    saveTools(tools);
    renderTools();
};

document.addEventListener('DOMContentLoaded', renderTools);

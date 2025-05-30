
//   function showTab(tabId) {
//     // Hide all tab content
//     document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
//     // Remove active from all buttons
//     document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('bg-gradient-to-r', 'from-gray-600', 'to-gray-800', 'text-white', 'active'));
//     // Show current tab
//     document.getElementById(tabId).classList.remove('hidden');
//     // Activate button
//     document.getElementById(tabId + '-btn').classList.add('bg-gradient-to-r', 'from-gray-600', 'to-gray-800', 'text-white', 'active');
//   }

//   // Initialize default tab
//   window.onload = () => showTab('tab1');

  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('bg-gray-100', 'active'));
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId + '-btn').classList.add('bg-gray-100', 'active');
  }
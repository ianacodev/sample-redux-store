export function renderDetails(element: HTMLLIElement, details) {
  console.log(element);
  const cardBody = element.querySelector('.detail-container') as HTMLLIElement;
  cardBody.innerHTML = '';
  for (const key in details) {
    console.log(key, details[key]);
    cardBody.innerHTML += `
    <div class="detail">
      <span class="detail-key">${key}</span>
      <span class="detail-value">${details[key]}</span>
    </div>
    `;
  }
}

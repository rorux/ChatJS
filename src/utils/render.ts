export default function render(query: string, component: any) {
  const root = document.querySelector<HTMLElement>(query);

  if (root) {
    root.appendChild(component.getContent());
  }

  component.dispatchComponentDidMount();
  return root;
}

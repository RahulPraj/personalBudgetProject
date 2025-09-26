const API_BASE = "https://8080-ecefccaacaee334924434bdfddbacaacfbcthree.premiumproject.examly.io/api/categories";

export async function addCategory(category) {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  if (!response.ok) {
    throw new Error("Failed to add category");
  }
  return response.json();
}

export async function getCategories() {
  const response = await fetch(API_BASE);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}

export async function getBudgetSummary() {
  const response = await fetch(`${API_BASE}/summary`);
  if (!response.ok) {
    throw new Error("Failed to fetch budget summary");
  }
  return response.json();
}

export async function deleteCategory(id) {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete category");
  }
  return true;
}
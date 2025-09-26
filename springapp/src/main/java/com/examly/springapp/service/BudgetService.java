package com.examly.springapp.service;

import com.examly.springapp.dto.BudgetSummaryDto;
import com.examly.springapp.model.Category;
import com.examly.springapp.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BudgetService {

    @Autowired
    private CategoryRepository categoryRepository;

    // Save new category
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    // Get all categories
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // Delete category by id
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    // Get budget summary
    // For simplicity, assume spentAmount is 0 (can be extended to track expenses)
    public List<BudgetSummaryDto> getBudgetSummary() {
        List<Category> categories = categoryRepository.findAll();

        // Simulate spentAmount = 0 for all categories (can be enhanced later)
        return categories.stream()
                .map(c -> new BudgetSummaryDto(c.getCategoryName(), c.getAllocatedAmount(), 0.0))
                .collect(Collectors.toList());
    }
}

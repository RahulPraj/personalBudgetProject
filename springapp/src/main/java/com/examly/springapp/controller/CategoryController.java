package com.examly.springapp.controller;

import com.examly.springapp.dto.BudgetSummaryDto;
import com.examly.springapp.model.Category;
import com.examly.springapp.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "https://8081-<your-environment>.premiumproject.examly.io")
public class CategoryController {

    @Autowired
    private BudgetService budgetService;

    @PostMapping
    public Category addCategory(@RequestBody Category category) {
        return budgetService.saveCategory(category);
    }

    @GetMapping
    public List<Category> getAllCategories() {
        return budgetService.getAllCategories();
    }

    @GetMapping("/summary")
    public List<BudgetSummaryDto> getBudgetSummary() {
        return budgetService.getBudgetSummary();
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable Long id) {
        budgetService.deleteCategory(id);
    }
}

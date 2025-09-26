package com.examly.springapp.dto;

public class BudgetSummaryDto {

    private String categoryName;
    private double allocatedAmount;
    private double spentAmount;
    private double remainingAmount;

    public BudgetSummaryDto(String categoryName, double allocatedAmount, double spentAmount) {
        this.categoryName = categoryName;
        this.allocatedAmount = allocatedAmount;
        this.spentAmount = spentAmount;
        this.remainingAmount = allocatedAmount - spentAmount;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public double getAllocatedAmount() {
        return allocatedAmount;
    }

    public double getSpentAmount() {
        return spentAmount;
    }

    public double getRemainingAmount() {
        return remainingAmount;
    }
}

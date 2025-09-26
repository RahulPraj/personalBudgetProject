package com.examly.springapp.model;

import javax.persistence.*;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String categoryName;
    private double allocatedAmount;
    private String description;

    public Category() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public double getAllocatedAmount() {
        return allocatedAmount;
    }

    public void setAllocatedAmount(double allocatedAmount) {
        this.allocatedAmount = allocatedAmount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

package com.shahid.portfolio.repository;

import com.shahid.portfolio.entity.Education;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<Education, Long> {
}
package com.shahid.portfolio.repository;

import com.shahid.portfolio.entity.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {
}
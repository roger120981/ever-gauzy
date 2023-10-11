import { IGithubIssue, IGithubRepository, IGithubSyncIssuePayload } from "@gauzy/contracts";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional } from "class-validator";
import { TenantOrganizationBaseDTO } from "core/dto";

/**
 * Data Transfer Object for processing GitHub issue synchronization.
 *
 * This DTO provides optional properties to handle GitHub issues and repositories during synchronization.
 */
export class ProcessGithubIssueSyncDTO extends TenantOrganizationBaseDTO implements IGithubSyncIssuePayload {
    /** Optional array of GitHub issues to synchronize. */
    @ApiPropertyOptional({ type: () => String })
    @IsOptional()
    @IsArray()
    readonly issues: IGithubIssue[];

    /** Optional GitHub repository for synchronization. */
    @ApiPropertyOptional({ type: () => String })
    @IsOptional()
    readonly repository: IGithubRepository;
}
